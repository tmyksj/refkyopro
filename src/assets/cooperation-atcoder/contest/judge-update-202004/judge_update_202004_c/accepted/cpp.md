# Judge System Update Test Contest 202004
## C - Numbering Blocks
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int a1, a2, a3;
    cin >> a1 >> a2 >> a3;

    vector<int> p(a1 + a2 + a3);
    for (int i = 0; i < a1 + a2 + a3; i++) {
        p[i] = i;
    }

    int res = 0;
    do {
        bool f = true;
        for (int i = 0; i < a1 - 1; i++) {
            if (p[i] > p[i + 1]) {
                f = false;
            }
        }
        for (int i = 0; i < a2 - 1; i++) {
            if (p[a1 + i] > p[a1 + i + 1]) {
                f = false;
            }
        }
        for (int i = 0; i < a3 - 1; i++) {
            if (p[a1 + a2 + i] > p[a1 + a2 + i + 1]) {
                f = false;
            }
        }
        for (int i = 0; i < a2; i++) {
            if (p[i] > p[a1 + i]) {
                f = false;
            }
        }
        for (int i = 0; i < a3; i++) {
            if (p[a1 + i] > p[a1 + a2 + i]) {
                f = false;
            }
        }
        if (f) {
            res++;
        }
    } while (next_permutation(p.begin(), p.end()));

    cout << res << endl;
}
```
