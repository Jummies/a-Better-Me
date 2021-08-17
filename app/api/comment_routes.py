from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Comment


comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/')
def comments():
    comments = Comment.query.all()
    if comments[0]:
        return jsonify({"comments": [comment.to_dict() for comment in comments]})
    else:
        return {'comments': []}


@comment_routes.route('/', methods=['POST'])
def new_comment():
    data = request.get_json() 
    print(data)   

    userId = data['userId']
    postId = data['postId']
    content = data['content']
    new_comment = Comment(userId=userId, postId=postId, content=content)
    db.session.add(new_comment)
    db.session.commit()

    return new_comment.to_dict()