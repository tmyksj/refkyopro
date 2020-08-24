# AtCoder Beginner Contest 150
## D - Semi Common Multiple
```cpp
#include <iostream>
#include <map>
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

template <class T>
T lcm(T a, T b) {
    return a / gcm(a, b) * b;
}

int main() {
    int n, m;
    cin >> n >> m;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    map<int, int> pat;
    for (int i = 0; i < n; i++) {
        int p = 0;
        for (int j = a[i] / 2; j % 2 == 0; j /= 2) {
            p++;
        }
        pat[p]++;
    }

    if (pat.size() == 1) {
        long long a_lcm = a[0] / 2;
        for (int i = 1; i < n; i++) {
            a_lcm = lcm(a_lcm, a[i] / 2);
        }

        cout << (m / a_lcm) / 2 + (m / a_lcm) % 2 << endl;
    } else {
        cout << "0" << endl;
    }
}
```
