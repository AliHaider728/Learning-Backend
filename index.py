# gen_users.py
import json
import random
import uuid

countries = ["Pakistan","USA","Canada","UAE","UK","Germany","India","Australia"]
names = ["Ali","Fatima","Aisha","John","David","Sarah","Omar","Noor","Zain","Hassan"]

def make_user(i):
    return {
        "id": i,
        "uuid": str(uuid.uuid4()),
        "name": random.choice(names) + " " + random.choice(["Khan","Ali","Noor","Smith","Lee"]),
        "email": f"user{i}@example.com",
        "age": random.randint(18, 60),
        "country": random.choice(countries),
        "isActive": random.choice([True, False])
    }

users = [make_user(i) for i in range(1, 51)]

with open("random_users.json", "w", encoding="utf-8") as f:
    json.dump({"users": users}, f, indent=2, ensure_ascii=False)

print("Saved random_users.json with 50 users")
