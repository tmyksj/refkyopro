# AtCoder Beginner Contest 125
## C - GCD on Blackboard
```cpp
#include <iostream>
#include <vector>

using namespace std;

int gcd(int m, int n) {
    if (m < n) {
        int w = m;
        m = n;
        n = w;
    }

    while (n != 0) {
        int w = m % n;
        m = n;
        n = w;
    }

    return m;
}

int main() {
    int n;
    cin >> n;

    vector<int> a(n + 2, 0);
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
    }

    vector<int> gcd_l(n + 2, 0);
    gcd_l[1] = a[1];
    for (int i = 2; i <= n; i++) {
        gcd_l[i] = gcd(gcd_l[i - 1], a[i]);
    }
    gcd_l[n + 1] = gcd_l[n];

    vector<int> gcd_r(n + 2, 0);
    gcd_r[n] = a[n];
    for (int i = n - 1; i >= 1; i--) {
        gcd_r[i] = gcd(gcd_r[i + 1], a[i]);
    }
    gcd_r[0] = gcd_r[1];

    int gcd_max = 0;
    for (int i = 1; i <= n; i++) {
        int r = gcd(gcd_l[i - 1], gcd_r[i + 1]);
        if (gcd_max < r) {
            gcd_max = r;
        }
    }

    cout << gcd_max << endl;
}
```
