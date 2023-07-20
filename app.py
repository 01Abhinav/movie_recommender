from urllib import request
from flask import Flask
import pandas as pd
import numpy as np

 
# Initializing flask app
app = Flask(__name__)
 
new_df = pd.read_csv('df.csv')
similarity = np.loadtxt('model.csv')

movie_names = new_df['title']

def recommend(movie):
    movie_index = new_df[new_df['title'].apply(lambda x: x.lower()) == movie.lower()].index[0]
    distances = similarity[movie_index]
    movies_list = sorted(list(enumerate(distances)), reverse=True, key = lambda x: x[1])[1:6]
    data = [[new_df.iloc[i[0]].title, new_df.iloc[i[0]].id] for i in movies_list]
    return data

@app.route('/data/<title>')
def get_time(title):

    data = recommend(title)
    obj = {
        'ids' :  [int(x[1]) for x in data],
        "recommendations" : [x[0] for x in data],  
    }
    return obj
 
@app.route('/getmovies')
def get_movies():
    return movie_names.to_json()

# Running app
if __name__ == '__main__':
    app.run(debug=True)     