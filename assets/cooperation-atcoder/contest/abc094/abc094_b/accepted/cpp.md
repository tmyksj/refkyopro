# AtCoder Beginner Contest 094
## B - Toll Gates
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, m, x;
    cin >> n >> m >> x;

    int sum_l = 0, sum_r = 0;
    for (int i = 0; i < m; i++) {
        int a;
        cin >> a;

        if (a < x) {
            sum_l++;
        } else {
            sum_r++;
        }
    }

    cout << (sum_l < sum_r ? sum_l : sum_r) << endl;
}
```
