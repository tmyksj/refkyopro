# AtCoder Regular Contest 028
## A - 小石を取るゲーム
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, a, b;
    cin >> n >> a >> b;
    cout << ((n - 1) % (a + b) < a ? "Ant" : "Bug") << endl;
}
```
