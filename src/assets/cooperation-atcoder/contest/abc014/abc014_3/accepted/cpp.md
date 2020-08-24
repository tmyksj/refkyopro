# AtCoder Beginner Contest 014
## C - AtColor
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    int m = 1000000;
    vector<int> c(m + 2, 0);
    for (int i = 0; i < n; i++) {
        int a, b;
        cin >> a >> b;
        c[a]++;
        c[b + 1]--;
    }

    int res = c[0];
    for (int i = 1; i <= m; i++) {
        c[i] += c[i - 1];
        res = max(res, c[i]);
    }

    cout << res << endl;
}
```
