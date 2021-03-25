from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, PostCritic


postCritic_routes = Blueprint('postCritics', __name__)


@postCritic_routes.route('/', methods=['POST'])
@login_required
def postCritic():
    critic = PostCritic.query.all().first()
    newCritic = request.get_json()
    userId = newCritic['userId']
    postId = newCritic['postId']
    
    if int(critic.userId) == int(userId) and int(critic.postId) == int(postId):
        db.session.delete(critic)
        db.session.commit()
        return({"userId": critic.userId, "postId": critic.postId})
    

    new_postCritic = PostCritic(userId=userId, postId=postId)
    db.session.add(new_postCritic)
    db.session.commit()
    return(newCritic)