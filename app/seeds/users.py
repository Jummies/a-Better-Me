from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(
        username='Demo',
        email='demo@aa.io',
        hashed_password=generate_password_hash('password'),
        biography="demo bio here",
        profilePicture='https://cdn.discordapp.com/attachments/610041795451158533/824257170954518548/IMG_6215.png'
    )

    jummy = User(
        username='jummy',
        email='jummy@aa.io',
        hashed_password=generate_password_hash('jummy'),
        biography="jummy bio here",
        profilePicture='https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/15110243_10211398981949453_2553713015301440169_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=_ZTkk69HvQwAX-_nj0m&_nc_ht=scontent-atl3-1.xx&oh=1faf1aa07d529a0c85992fe3fd5522c4&oe=607F1095'
    )

    aang = User(
        username='aang',
        email='aang@aa.io',
        hashed_password=generate_password_hash('password'),
        biography="aang bio here",
        profilePicture='https://external-preview.redd.it/mdd8KvJ8AHqe0D_xbxN2_e1vRkmnB287EUVnOefdBBA.jpg?auto=webp&s=91d270e775f19734803c5814e2762ea5e2aa3923'
    )

    db.session.add(demo)
    db.session.add(jummy)
    db.session.add(aang)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
