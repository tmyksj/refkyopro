# AtCoder Beginner Contest 088
## A - Infinite Coins
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, a;
    cin >> n >> a;
    cout << (n % 500 <= a ? "Yes" : "No") << endl;
}
```
