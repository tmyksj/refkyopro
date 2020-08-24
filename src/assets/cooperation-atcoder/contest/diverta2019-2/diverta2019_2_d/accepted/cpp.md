# diverta 2019 Programming Contest 2
## D - Squirrel Merchant
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

long long solve(long long n,
        long long ga, long long sa, long long ba,
        long long gb, long long sb, long long bb) {
    long long res = n;
    for (int i = 0; gb > ga ? i * ga <= n : i <= 0; i++) {
        for (int j = 0; sb > sa ? i * ga + j * sa <= n : j <= 0; j++) {
            res = max(res, n + i * (gb - ga) + j * (sb - sa));
            res = max(res, n + i * (gb - ga) + j * (sb - sa) + ((n - i * ga - j * sa) / ba) * (bb - ba));
        }
    }
    return res;
}

int main() {
    long long n, ga, sa, ba, gb, sb, bb;
    cin >> n >> ga >> sa >> ba >> gb >> sb >> bb;

    if ((ga < gb && sa < sb) || (ga > gb && sa > sb)) {
        swap(ga, ba);
        swap(gb, bb);
    }

    cout << solve(solve(n, ga, sa, ba, gb, sb, bb), gb, sb, bb, ga, sa, ba) << endl;
}
```
