#include <iostream>
using namespace std;

void merge(int  array[], int left, int middle, int right) {
    int n1 = middle - left + 1;
    int n2 = right - middle;

    
    int L[n1], R[n2];

    // Copy data to temporary  arrayays L[] and R[]
    for (int i = 0; i < n1; i++)
        L[i] =  array[left + i];
    for (int j = 0; j < n2; j++)
        R[j] =  array[middle + 1 + j];

    // Merge the temporary  arrayays back into  array[left..right]
    int i = 0; 
    int j = 0; 
    int k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
             array[k] = L[i];
            i++;
        } else {
             array[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1) {
         array[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2) {
         array[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int  array[], int left, int right) {
    if (left < right) {
        // Same as (left+right)/2
        int middle = left + (right - left) / 2;

        // Sort first and second halves
        mergeSort( array, left, middle);
        mergeSort( array, middle + 1, right);

        // Merge the sorted halves
        merge( array, left, middle, right);
    }
}

int main() {
    const int size = 7;
    int  array[size] = {12, 9, 7, 5, 2, 8, 1};

     cout << "Original  arrayay: ";
    for (int i = 0; i < size; i++) {
         cout <<  array[i] << " ";
    }
     cout <<  endl;

    mergeSort( array, 0, size - 1);

     cout << "Sorted  array: ";
    for (int i = 0; i < size; i++) {
         cout <<  array[i] << " ";
    }
     cout <<  endl;

    return 0;
}
