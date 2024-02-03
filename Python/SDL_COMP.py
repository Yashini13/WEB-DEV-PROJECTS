import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns

# Generating some random data for demonstration
np.random.seed(42)
data = {
    'Age': np.random.randint(18, 65, 100),
    'Income': np.random.randint(20000, 100000, 100),
    'Category': np.random.choice(['A', 'B', 'C'], 100),
}

df = pd.DataFrame(data)

# Histogram
plt.figure(figsize=(10, 6))
plt.hist(df['Age'], bins=20, color='skyblue', edgecolor='black')
plt.title('Histogram of Age')
plt.xlabel('Age')
plt.ylabel('Frequency')
plt.show()

# Pie Chart
category_counts = df['Category'].value_counts()
plt.figure(figsize=(8, 8))
plt.pie(category_counts, labels=category_counts.index, autopct='%1.1f%%', startangle=90, colors=['lightcoral', 'lightgreen', 'lightskyblue'])
plt.title('Distribution of Categories')
plt.show()

# Pair Plot
sns.pairplot(df, hue='Category', palette='viridis')
plt.suptitle('Pair Plot of Age, Income, and Category', y=1.02)
plt.show()
