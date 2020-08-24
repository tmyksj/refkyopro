# AtCoder Beginner Contest 159
## A - The Number of Even Pairs
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    cout << (n >= 2 ? n * (n - 1) / 2 : 0) + (m >= 2 ? m * (m - 1) / 2 : 0) << endl;
}
```
