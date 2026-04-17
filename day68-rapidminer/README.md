# 🚀 RapidMiner + Node.js (Beginner ML Demo)

This project demonstrates a simple **Machine Learning workflow** using RapidMiner with a product dataset.

---

## 🎯 Objective

To understand how:

```
Input Data → Model Learning → Prediction Output
```

---

## 📂 Dataset

We use a CSV file with the following columns:

* `price` → Product price
* `title` → Product name *(not used for prediction)*
* `category` → Product category
* `stock` → Available quantity
* `rating` → Customer rating
* `demand` → Target (High / Medium / Low)

---

## 🧠 Concept

We train a model to predict:

👉 **Product Demand**

Based on:

* price
* category
* stock
* rating

---

## ⚙️ Steps to Run (RapidMiner)

### 1️⃣ Open RapidMiner

* Launch RapidMiner Studio
* Click **Auto Model**

---

### 2️⃣ Load Dataset

* Import your CSV file
* Click **Next**

---

### 3️⃣ Select Target

* Choose:

```
demand
```

---

### 4️⃣ Select Inputs

Select ONLY:

```
price, category, stock, rating
```

❌ Ignore:

```
title
```

---

### 5️⃣ Choose Models

Keep ONLY:

```
✔ Decision Tree  
✔ Logistic Regression
```

Turn OFF all other models.

---

### 6️⃣ Run Model

* Click **RUN**
* Wait for results

---

## 📊 Understanding Results

### ✅ Best Model

RapidMiner automatically selects the best performing model.

---

### ✅ Accuracy

Shows how correct the predictions are:

```
Example: 85% accuracy = 85 correct predictions out of 100
```

---

### ✅ Predictions Table (IMPORTANT)

Compare:

```
Actual Demand vs Predicted Demand
```

Example:

| price | stock | demand | prediction |
| ----- | ----- | ------ | ---------- |
| 50000 | 10    | High   | Low        |
| 20000 | 50    | Low    | High       |

---

## 🔍 How Prediction Works

The model learns patterns like:

```
IF stock is low → High demand  
IF stock is high → Low demand
```

It uses these patterns to predict new data.

---

## 🧪 Example Prediction

Input:

```
price: 60000  
stock: 5  
rating: 4.6  
```

Output:

```
Predicted Demand: High
```

---

## 🔗 Real-world Integration (Concept)

In a real application:

* Backend (Node.js) sends data
* Model predicts demand
* Response is returned via API

---

## 🧠 Key Takeaway

> Machine Learning = Learning patterns from past data and predicting future results.

---