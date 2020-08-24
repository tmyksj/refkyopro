# AtCoder Beginner Contest 026
## C - 高橋君の給料
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> b(n, 0);
    for (int i = 1; i < n; i++) {
        cin >> b[i];
    }

    vector<int> s(n, 1), s_max(n, -1), s_min(n, 1000000000);
    for (int i = n - 1; i >= 0; i--) {
        if (s_max[i] >= 0) {
            s[i] = s_max[i] + s_min[i] + 1;
        }

        if (b[i] - 1 >= 0) {
            s_max[b[i] - 1] = max(s_max[b[i] - 1], s[i]);
            s_min[b[i] - 1] = min(s_min[b[i] - 1], s[i]);
        }
    }

    cout << s[0] << endl;
}
```
