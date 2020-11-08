# AtCoder Regular Contest 026
## A - ダイナミックなポーズ
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int n, a, b;
    cin >> n >> a >> b;
    cout << max(n - 5, 0) * a + min(n, 5) * b << endl;
}
```
