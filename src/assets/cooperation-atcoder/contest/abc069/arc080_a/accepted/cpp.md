# AtCoder Beginner Contest 069
## C - 4-adjacent
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int cnt_o = 0, cnt_f = 0;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;

        if (a % 2 != 0) {
            cnt_o++;
        } else if (a % 4 == 0) {
            cnt_f++;
        }
    }

    cout << (cnt_o <= cnt_f || (cnt_o == cnt_f + 1 && cnt_o + cnt_f == n) ? "Yes" : "No") << endl;
}
```
