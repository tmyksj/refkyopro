# キーエンス プログラミング コンテスト 2019
## A - Beginning
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<bool> r(10, false);
    for (int i = 0; i < 4; i++) {
        int n;
        cin >> n;
        r[n] = true;
    }

    cout << (r[1] && r[9] && r[7] && r[4] ? "YES" : "NO") << endl;
}
```
