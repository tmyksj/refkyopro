# AtCoder Beginner Contest 090
## C - Flip,Flip, and Flip......
```cpp
#include <iostream>

using namespace std;

int main() {
    long long n, m;
    cin >> n >> m;
    cout << (n == 1 ? 1 : n - 2) * (m == 1 ? 1 : m - 2) << endl;
}
```
