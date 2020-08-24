# エイシング プログラミング コンテスト 2019
## B - Contests
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int n, a, b;
    cin >> n >> a >> b;

    int q = 0, r = 0, s = 0;
    for (int i = 0; i < n; i++) {
        int p;
        cin >> p;

        if (p <= a) {
            q++;
        } else if (p <= b) {
            r++;
        } else {
            s++;
        }
    }

    cout << min({ q, r, s }) << endl;
}
```
