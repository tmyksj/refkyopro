# AtCoder Beginner Contest 176
## C - Step
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    long long res = 0;
    for (int i = 0, j = 0; i < n; i++) {
        int a;
        cin >> a;
        res += max(j - a, 0);
        j = max(j, a);
    }

    cout << res << endl;
}
```
