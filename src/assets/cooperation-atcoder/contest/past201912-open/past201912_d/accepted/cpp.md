# 第一回 アルゴリズム実技検定 過去問
## D - 重複検査
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> c(n, 0);
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        c[a - 1]++;
    }

    vector<int>::iterator x = find(c.begin(), c.end(), 0);
    vector<int>::iterator y = find(c.begin(), c.end(), 2);

    if (x == c.end()) {
        cout << "Correct" << endl;
    } else {
        cout << y - c.begin() + 1 << " " << x - c.begin() + 1 << endl;
    }
}
```
