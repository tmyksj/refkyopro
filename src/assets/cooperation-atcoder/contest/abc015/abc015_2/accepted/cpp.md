# AtCoder Beginner Contest 015
## B - 高橋くんの集計
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int a_sum = 0, cnt = 0;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;

        if (a > 0) {
            a_sum += a;
            cnt++;
        }
    }

    cout << (a_sum + cnt - 1) / cnt << endl;
}
```
