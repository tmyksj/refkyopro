# AtCoder Grand Contest 032
## A - Limited Insertion
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> b(n);
    for (int i = 0; i < n; i++) {
        cin >> b[i];
    }

    vector<int> op(n, -1);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i; j++) {
            if (b[j] == j + 1) {
                op[n - i - 1] = j;
            }
        }

        if (op[n - i - 1] == -1) {
            break;
        } else {
            b.erase(b.begin() + op[n - i - 1]);
        }
    }

    if (op[0] == -1) {
        cout << -1 << endl;
    } else {
        for (int i = 0; i < n; i++) {
            cout << op[i] + 1 << endl;
        }
    }
}
```
