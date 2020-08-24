# AtCoder Beginner Contest 173
## D - Chat in a Circle
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    sort(a.begin(), a.end());

    long long res = 0;
    for (int i = 0; i < n - 1; i++) {
        res += a[n - (i + 1) / 2 - 1];
    }

    cout << res << endl;
}
```
