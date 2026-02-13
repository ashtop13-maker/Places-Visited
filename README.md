## Tests

### Test 1: Constructor Creates Object
const malindi = new Place("Malindi", "Vasco da Gama Pillar", "December", "Hot");

Expected Output:
malindi.location → "Malindi"

---

### Test 2: Stores All Properties Correctly
Expected Output:
malindi.landmarks → "Vasco da Gama Pillar"
malindi.timeOfYear → "December"
malindi.notes → "Hot"

---

### Test 3: Prototype Method Works
malindi.fullDetails();

Expected Output:
"Location: Malindi
Landmarks: Vasco da Gama Pillar
Time of Year: December
Notes: Hot"
