import json
from werkzeug.security import generate_password_hash
from app.models import db, Comment


def seed_comments():

    # first = Comment(
    #     userId = 1,
    #     postId = 1, 
    #     content = '1 1'
    # )
  
    # db.session.add(first)

    new_comments = []
    with open('./app/seeds/comments.json') as f:
        data = json.load(f)
        for comment in data:
            new_comment = Comment(**comment)
            new_comments.append(new_comment)

    # db.session.add(demo)
    db.session.add_all(new_comments)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_comments():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
