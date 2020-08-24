# Judge System Update Test Contest 202004
## D - Calculating GCD
```cpp
#include <iostream>
#include <vector>

using namespace std;

template <class T>
T gcm(T a, T b) {
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

int main() {
    int n, q;
    cin >> n >> q;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<int> b(a);
    for (int i = 1; i < n; i++) {
        b[i] = gcm(b[i - 1], b[i]);
    }

    for (int i = 0; i < q; i++) {
        int s;
        cin >> s;

        int l = 0, r = n;
        while (l < r) {
            int m = (l + r) / 2;
            if (gcm(b[m], s) > 1) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        cout << (l < n ? l + 1 : gcm(b[n - 1], s)) << endl;
    }
}
```
