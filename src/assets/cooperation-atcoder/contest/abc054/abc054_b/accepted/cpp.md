# AtCoder Beginner Contest 054
## B - Template Matching
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<string> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<string> b(m);
    for (int i = 0; i < m; i++) {
        cin >> b[i];
    }

    bool res = false;
    for (int i = 0; i + m <= n; i++) {
        for (int j = 0; j + m <= n; j++) {
            bool r = true;
            for (int k = 0; k < m; k++) {
                for (int l = 0; l < m; l++) {
                    if (a[i + k][j + l] != b[k][l]) {
                        r = false;
                    }
                }
            }

            if (r) {
                res = true;
            }
        }
    }

    cout << (res ? "Yes" : "No") << endl;
}
```
