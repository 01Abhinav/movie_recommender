from urllib import request
from flask import Flask
import pandas as pd
import numpy as np

 
# Initializing flask app
app = Flask(__name__)
 
new_df = pd.read_csv('df.csv')
similarity = np.loadtxt('model.csv')

def recommend(movie):
    movie_index = new_df[new_df['title'] == movie].index[0]
    print("----------------------------"+str(movie_index))
    #print(similarity.dtypes)
    distances = similarity[movie_index]
    #print(distances)
    movies_list = sorted(list(enumerate(distances)), reverse=True, key = lambda x: x[1])[1:6]
    #print(movies_list)
    
    return [new_df.iloc[i[0]].title for i in movies_list]
 
# Route for seeing a data
@app.route('/data/<title>')
def get_time(title):

    recommendations = recommend(title)
    print(recommendations)
    return {
        'recommendations': recommendations,
        }
 
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)