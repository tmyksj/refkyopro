# AtCoder Regular Contest 046
## B - 石取り大作戦
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, a, b;
    cin >> n >> a >> b;
    cout << (n <= a || (n > a && a == b && n % (a + 1) != 0) || (n > a && a > b) ? "Takahashi" : "Aoki") << endl;
}
```
