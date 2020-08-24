# エイシング プログラミング コンテスト 2020
## B - An Odd Problem
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int res = 0;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;

        if (i % 2 == 0 && a % 2 == 1) {
            res++;
        }
    }

    cout << res << endl;
}
```
