# AtCoder Beginner Contest 177
## E - Coprime
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

template <class T>
T gcd(T a, T b) {
    if (a < b) {
        T w = a;
        a = b;
        b = w;
    }

    while (b != 0) {
        T w = a % b;
        a = b;
        b = w;
    }

    return a;
}

bool is_pairwise(vector<int>& a) {
    vector<bool> v(*max_element(a.begin(), a.end()) + 1, false);

    for (int i = 0; i < static_cast<int>(a.size()); i++) {
        int b = a[i];
        for (int j = 2; j * j <= b; j++) {
            if (b % j == 0 && v[j]) {
                return false;
            } else if (b % j == 0) {
                v[j] = true;
                while (b % j == 0) {
                    b /= j;
                }
            }
        }

        if (b > 1 && v[b]) {
            return false;
        } else if (b > 1) {
            v[b] = true;
        }
    }

    return true;
}

bool is_setwise(vector<int>& a) {
    int b = a[0];
    for (int i = 1; i < static_cast<int>(a.size()) && b > 1; i++) {
        b = gcd(b, a[i]);
    }

    return b == 1;
}

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    if (is_pairwise(a)) {
        cout << "pairwise coprime" << endl;
    } else if (is_setwise(a)) {
        cout << "setwise coprime" << endl;
    } else {
        cout << "not coprime" << endl;
    }
}
```
