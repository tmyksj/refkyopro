# AtCoder Beginner Contest 161
## B - Popular Vote
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += a[i];
    }

    int cnt = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] >= (sum + 4 * m - 1) / (4 * m)) {
            cnt++;
        }
    }

    cout << (cnt >= m ? "Yes" : "No") << endl;
}
```
