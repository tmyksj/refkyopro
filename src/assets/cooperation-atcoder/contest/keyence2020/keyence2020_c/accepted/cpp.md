# キーエンス プログラミング コンテスト 2020
## C - Subarray Sum
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, k, s;
    cin >> n >> k >> s;

    for (int i = 0; i < k; i++) {
        cout << s << (i < n - 1 ? " " : "");
    }

    for (int i = k; i < n; i++) {
        cout << (s <= 100000 ? 100001 : 1) << (i < n - 1 ? " " : "");
    }

    cout << endl;
}
```
