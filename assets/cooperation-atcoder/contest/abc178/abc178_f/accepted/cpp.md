# AtCoder Beginner Contest 178
## F - Contrast
```cpp
#include <algorithm>
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

    vector<int> b(n);
    for (int i = 0; i < n; i++) {
        cin >> b[i];
    }

    vector<int> c(n + 1, 0), d(n + 1, 0);
    for (int i = 0; i < n; i++) {
        c[a[i]]++;
        d[b[i]]++;
    }

    vector<int> s(n + 1, 0);
    for (int i = 0; i <= n; i++) {
        s[i] = c[i] + d[i];
    }

    if (*max_element(s.begin(), s.end()) <= n) {
        for (int i = 1; i <= n; i++) {
            c[i] += c[i - 1];
            d[i] += d[i - 1];
        }

        int t = 0;
        for (int i = 1; i <= n; i++) {
            t = max(t, c[i] - d[i - 1]);
        }

        cout << "Yes" << endl;
        for (int i = 0; i < n; i++) {
            cout << (i == 0 ? "" : " ") << b[(i - t + n) % n];
        }
        cout << endl;
    } else {
        cout << "No" << endl;
    }
}
```
