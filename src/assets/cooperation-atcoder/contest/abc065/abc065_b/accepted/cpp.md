# AtCoder Beginner Contest 065
## B - Trained?
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int res = -1;
    vector<bool> trained(n, false);
    for (int i = 0, r = 0; !trained[i]; i = a[i] - 1, r++) {
        trained[i] = true;
        if (i == 1) {
            res = r;
            break;
        }
    }

    cout << res << endl;
}
```
