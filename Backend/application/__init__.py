from flask import Flask,g,jsonify
import os



# using application factory function 
def create_app():
    # initializing an app
    app=Flask(__name__,instance_relative_config=True)

    # mongoDB connection function
    def get_db():
        if "db" not in g:
            # creating a new client 
            client=MongoClient('localhost',27017)

            g.db=client.MindCare

        return g.db

    # closing the mongoDB connection automatically
    @app.teardown_appcontext
    def close_db(error):
        db=g.pop('db',None)
        if db is not None:
            db.client.close()


    # loading the config file from the instance dir
    app.config.from_pyfile('config.py',silent=True)

    
    # defining the routes 
    @app.route('/')
    def Homehandler():
        db = get_db()
        collection = db.sample

        # Retrieve all documents from the collection
        data = [
            {key: (str(value) if key == '_id' else value) for key, value in doc.items()}
            for doc in collection.find({})
        ]

        # Return the data as a JSON response
        return jsonify(data)
    

    return app




