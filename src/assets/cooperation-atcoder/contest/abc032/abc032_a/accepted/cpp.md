# AtCoder Beginner Contest 032
## A - 高橋君と青木君の好きな数
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, n;
    cin >> a >> b >> n;

    int res = n;
    while (res % a != 0 || res % b != 0) {
        res++;
    }

    cout << res << endl;
}
```
