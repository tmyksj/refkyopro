# AtCoder Beginner Contest 153
## C - Fennec vs Monster
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> h(n);
    for (int i = 0; i < n; i++) {
        cin >> h[i];
    }

    sort(h.begin(), h.end(), greater<int>());

    long long res = 0;
    for (int i = k; i < n; i++) {
        res += h[i];
    }

    cout << res << endl;
}
```
