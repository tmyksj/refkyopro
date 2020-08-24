# AtCoder Beginner Contest 161
## C - Replacing Integer
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    long long n, k;
    cin >> n >> k;
    cout << min(n - (n / k) * k, -(n - (n / k) * k - k)) << endl;
}
```
