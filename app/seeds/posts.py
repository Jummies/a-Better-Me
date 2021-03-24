from app.models import db, Post
# Can


def seed_posts():

    first = Post(
        description="First post by demo", 
        private=False, 
        imagePath = "https://adoxx-org.github.io/GO0DMAN-Innovation-Shop/assets/images/demo_teaser.png",
        userId = 1
    )

    second = Post(
        description="hi this is a description", 
        private=False, 
        imagePath = "https://media.istockphoto.com/vectors/vector-logo-letter-j-glitch-distortion-vector-id1008253498",
        userId = 2
    )

    third = Post(
        description="sup", 
        private=False, 
        imagePath = "https://thumbs.gfycat.com/ZigzagUntidyKatydid-size_restricted.gif",
        userId = 3
    )

    
    db.session.add(first)
    db.session.add(second)
    db.session.add(third)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_posts():
    db.session.execute('TRUNCATE posts CASCADE;')
    db.session.commit()