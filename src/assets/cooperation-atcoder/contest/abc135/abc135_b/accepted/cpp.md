# AtCoder Beginner Contest 135
## B - 0 or 1 Swap
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> p(n);
    for (int i = 0; i < n; i++) {
        cin >> p[i];
    }

    bool exists = false;
    for (int i = 0; i < n && !exists; i++) {
        for (int j = i; j < n && !exists; j++) {
            vector<int> sorted(n);
            for (int k = 0; k < n; k++) {
                sorted[k] = k + 1;
            }

            int w = sorted[i];
            sorted[i] = sorted[j];
            sorted[j] = w;

            bool equals = true;
            for (int k = 0; k < n && equals; k++) {
                if (p[k] != sorted[k]) {
                    equals = false;
                }
            }

            if (equals) {
                exists = true;
            }
        }
    }

    cout << (exists ? "YES" : "NO") << endl;
}
```
