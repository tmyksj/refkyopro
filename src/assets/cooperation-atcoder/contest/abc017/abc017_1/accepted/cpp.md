# AtCoder Beginner Contest 017
## A - プロコン
```cpp
#include <iostream>

using namespace std;

int main() {
    int res = 0;
    for (int i = 0; i < 3; i++) {
        int s, e;
        cin >> s >> e;
        res += s * e / 10;
    }
    cout << res << endl;
}
```
