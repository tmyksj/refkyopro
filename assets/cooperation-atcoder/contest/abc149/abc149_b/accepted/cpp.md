# AtCoder Beginner Contest 149
## B - Greedy Takahashi
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long a, b, k;
    cin >> a >> b >> k;

    if (a >= k) {
        cout << a - k << " " << b << endl;
    } else {
        cout << "0 " << max(b - (k - a), 0LL) << endl;
    }
}
```
