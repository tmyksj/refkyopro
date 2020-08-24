# Tenka1 Programmer Beginner Contest
## D - Crossing
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int k = 2;
    while (k * (k - 1) / 2 < n) {
        k++;
    }

    if (k * (k - 1) / 2 == n) {
        cout << "Yes" << endl;
        cout << k << endl;

        cout << k - 1;
        for (int i = 0, s = 1; i < k - 1; i++, s += i + 1) {
            cout << " " << s;
        }
        cout << endl;

        for (int i = 0; i < k - 1; i++) {
            cout << k - 1;
            for (int j = 0, s = i * (i + 1) / 2 + 1; j < k - 1; j++, s += (j <= i ? 1 : j)) {
                cout << " " << s;
            }
            cout << endl;
        }
    } else {
        cout << "No" << endl;
    }
}
```
