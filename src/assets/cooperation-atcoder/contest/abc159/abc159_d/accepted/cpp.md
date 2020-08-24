# AtCoder Beginner Contest 159
## D - Banned K
```cpp
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

    vector<long long> s(n + 1, 0);
    for (int i = 0; i < n; i++) {
        s[a[i]]++;
    }

    long long r = 0;
    for (int i = 1; i <= n; i++) {
        r += s[i] * (s[i] - 1) / 2;
    }

    for (int i = 0; i < n; i++) {
        cout << r - s[a[i]] * (s[a[i]] - 1) / 2 + (s[a[i]] - 1) * (s[a[i]] - 2) / 2 << endl;
    }
}
```
