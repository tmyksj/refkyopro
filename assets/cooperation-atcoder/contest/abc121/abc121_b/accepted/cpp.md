# AtCoder Beginner Contest 121
## B - Can you solve this?
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m, c;
    cin >> n >> m >> c;

    vector<int> b(m);
    for (int i = 0; i < m; i++) {
        cin >> b[i];
    }

    int cnt = 0;
    for (int i = 0; i < n; i++) {
        int sum = c;
        for (int j = 0; j < m; j++) {
            int a;
            cin >> a;
            sum += a * b[j];
        }

        if (sum > 0) {
            cnt++;
        }
    }

    cout << cnt << endl;
}
```
