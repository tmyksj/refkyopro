# AtCoder Beginner Contest 081
## D - Non-decreasing
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<int>::iterator a_max = max_element(a.begin(), a.end());
    vector<int>::iterator a_min = min_element(a.begin(), a.end());

    if (*a_max < 0) {
        cout << n - 1 << endl;
        for (int i = 0; i < n - 1; i++) {
            cout << n - i << " " << n - i - 1 << endl;
        }
    } else if (*a_min >= 0) {
        cout << n - 1 << endl;
        for (int i = 0; i < n - 1; i++) {
            cout << i + 1 << " " << i + 2 << endl;
        }
    } else if (abs(*a_max) < abs(*a_min)) {
        cout << 2 * n - 1 << endl;
        for (vector<int>::iterator i = a.begin(); i != a.end(); i++) {
            cout << a_min - a.begin() + 1 << " " << i - a.begin() + 1 << endl;
        }
        for (int i = 0; i < n - 1; i++) {
            cout << n - i << " " << n - i - 1 << endl;
        }
    } else {
        cout << 2 * n - 1 << endl;
        for (vector<int>::iterator i = a.begin(); i != a.end(); i++) {
            cout << a_max - a.begin() + 1 << " " << i - a.begin() + 1 << endl;
        }
        for (int i = 0; i < n - 1; i++) {
            cout << i + 1 << " " << i + 2 << endl;
        }
    }
}
```
