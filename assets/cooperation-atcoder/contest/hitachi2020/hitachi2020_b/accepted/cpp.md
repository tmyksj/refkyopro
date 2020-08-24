# 日立製作所 社会システム事業部 プログラミングコンテスト2020
## B - Nice Shopping
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int a, b, m;
    cin >> a >> b >> m;

    vector<int> ai(a);
    for (int i = 0; i < a; i++) {
        cin >> ai[i];
    }

    vector<int> bi(b);
    for (int i = 0; i < b; i++) {
        cin >> bi[i];
    }

    int res = *min_element(ai.begin(), ai.end()) + *min_element(bi.begin(), bi.end());
    for (int i = 0; i < m; i++) {
        int x, y, c;
        cin >> x >> y >> c;
        res = min(res, ai[x - 1] + bi[y - 1] - c);
    }

    cout << res << endl;
}
```
